/**
 * Profile
 */
interface Profile {
  id: string
  name: string
}

class ProfileModel implements Profile {
  id: string
  name: string
  constructor(profile: Profile) {
    this.id = profile.id
    this.name = profile.name
  }

  values(): any {
    /**
     * 【KADAI】ここを実装してください。
     * */
    return {
    id: this.id,
    name: this.name
    }
  }

  /**
   * 【KADAI】ここにProfile型で値を返す関数を実装してください。
   * */
  getProfile(): Profile {
    return {
      id: this.id,
      name: this.name
    }
  }
}

/**
 * 参照渡し・値渡し
 */
export const referenceAndCopy = () =>   {
  /**
   * 参照渡し
   * profileAを代入したprofileBの値を変更するとprofileAにも反映される
   * */
  const profileA: ProfileModel = new ProfileModel({ id: '0', name: 'yamada' })
  const profileB: ProfileModel = profileA
  profileB.id = '1'
  profileB.name = 'hanako'
  console.log('参照渡し', profileA) // 参照渡し ProfileModel { id: '1', name: 'hanako' }
  console.log('参照渡し', profileB) // 参照渡し ProfileModel { id: '1', name: 'hanako' }
}

{
  /**
   * 値渡し
   * profileAを値渡しでコピーすることで値を変更してもprofileAには反映されない。
   * */
  let profileA: ProfileModel = new ProfileModel({ id: '0', name: 'yamada' })

  const copyA: any = profileA.values();
  const copyB: Profile = profileA.getProfile();/* 【KADAI】ここを実装してください。 */
  const copyC: ProfileModel = Object.assign({}, profileA);/* 【KADAI】ここを実装してください。 */
  copyA.id = '1'
  copyA.name = 'hanako'
  copyB.id = '2'
  copyB.name = 'taro'
  copyC.id = '3'
  copyC.name = 'tanaka'
  console.log('値渡し', profileA.values())
  console.log('値渡し', copyA)
  console.log('値渡し', copyB)
  console.log('値渡し', copyC)
};
