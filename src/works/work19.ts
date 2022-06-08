interface Phone {
  receive(name: string, phoneNumber: string): void
  call(): void;
}

export class PhoneHuman implements Phone {
  name: string
  phoneNumber: string
  friendInfo: Phone | null = null
  friend: PhoneHuman | null = null

  constructor(name: string, phoneNumber: string) {
    this.name = name
    this.phoneNumber = phoneNumber
  }

  setFriend(friend: PhoneHuman) {
    this.friend = friend
    this.friend.friendInfo = this
  }

  receive(name: string, phoneNumber: string) {
    console.log(`${this.name}です。`, `${name} くんから電話がきました。着信番号: ${phoneNumber}`)
  }

  call() {
    if (this.friendInfo !== null) {
      this.friendInfo.receive(this.name, this.phoneNumber)
    } else {
      console.log('友達をセットしてください。')
    }
  }
}
