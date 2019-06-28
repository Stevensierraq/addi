export interface IInput {
  size?: string
  type?: string
  placeholder: string
  icon: 'email' | 'dni' | 'number' | 'date' | 'phone' | 'address' | 'user'
}
