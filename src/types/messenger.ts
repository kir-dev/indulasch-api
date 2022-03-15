import { readFileSync, writeFile } from "fs";

const fileName = "messages.json";

export class Messenger {
  private messages: MessageWithId[];
  private lastId;

  constructor() {
    this.messages = loadMessages();
    this.lastId = getLastId(this.messages);
  }
  addMessage(message: Message) {
    this.messages.push({ id: this.lastId++, ...message });
    saveMessages(this.messages);
  }
  clearMessages() {
    saveMessages(this.messages);
    this.messages = [];
  }
  getMessages() {
    return this.messages;
  }
  removeMessage(id: number) {
    this.messages = this.messages.filter((m) => m.id !== id);
    saveMessages(this.messages);
  }
}

export enum MessageType {
  INFO = "INFO",
  WARNING = "WARNING",
  SUCCESS = "SUCCESS",
  FUN = "FUN",
}

export type Message = {
  text: string;
  type: MessageType;
};

export type MessageWithId = {
  id: number;
} & Message;

function saveMessages(messages: MessageWithId[]) {
  writeFile(fileName, JSON.stringify(messages), (errno) => {
    if (errno) console.error("Üzenetek mentése sikertelen.");
  });
}

function loadMessages() {
  try {
    const loaded = readFileSync(fileName).toString();
    return JSON.parse(loaded) as MessageWithId[];
  } catch (err) {
    console.error("Üzenetek betöltése sikertelen.");
    return [] as MessageWithId[];
  }
}

function getLastId(messages: MessageWithId[]) {
  let highest = 0;
  for (let m of messages) {
    if (m.id > highest) highest = m.id;
  }
  return highest + 1;
}
