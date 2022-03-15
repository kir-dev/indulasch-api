export class Messenger {
  private messages: MessageWithId[] = [];
  private lastId = 1;
  addMessage(message: Message) {
    this.messages.push({ id: this.lastId++, ...message });
  }
  clearMessages() {
    return (this.messages = []);
  }
  getMessages() {
    return this.messages;
  }
  removeMessage(id: number) {
    this.messages = this.messages.filter((m) => m.id !== id);
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
