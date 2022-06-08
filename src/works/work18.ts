class Boss {
  private otakara: string = 'お宝の在りかは大阪上本町の上の方だよ！'
  protected getOtakara(): string {
    /**
     * 【KADAI】ここを実装してください。
     *  ヒント：文字列を返すすように実装することを考えると.....？
     * */
    return this.otakara;
  }
}

export class Kobun extends Boss {
  /**
   * 【KADAI】ここを実装してください。
   *  ヒント：Bossクラスで作ったメソッドをオーバーライドして.....？
   * */
  getOtakara() {
    return super.getOtakara()
  }
}
