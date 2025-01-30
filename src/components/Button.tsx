import { ButtonTexts, ButtonTypes } from '../../constants/constants'
import { ButtonPropsType } from '../../types'

export default function Button({
  text = ButtonTexts.SUBMIT,
  handler,
  styles = 'btn btn-primary',
  type = ButtonTypes.SUBMIT,
  isDisabled = false,
}: ButtonPropsType) {
  return (
    <button className={styles} onClick={handler} type={type} disabled={isDisabled}>
      <span>{text}</span>
    </button>
  )
}
