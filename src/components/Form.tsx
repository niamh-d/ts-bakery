import { useForm, SubmitHandler } from 'react-hook-form'
import Button from './Button'
import { FormDataType, FormPropsType } from '../../types'
import { ButtonTexts, formDefaultValues } from '../../constants/constants'

export default function Form({ changeFormHandler, submitOrderHandler }: FormPropsType) {
  const { register, handleSubmit, watch } = useForm<FormDataType>({
    defaultValues: formDefaultValues,
  })
  const onSubmit: SubmitHandler<FormDataType> = (data: FormDataType) => {
    submitOrderHandler({
      ...data,
      steamBunsQuantity: Number(data.steamBunsQuantity),
      cookiesQuantity: Number(data.cookiesQuantity),
      creamPuffsQuantity: Number(data.creamPuffsQuantity),
      speedyDelivery: data.speedyDelivery,
    })
  }

  const handleChange = () => {
    changeFormHandler({
      steamBunsQuantity: Number(watch('steamBunsQuantity')),
      cookiesQuantity: Number(watch('cookiesQuantity')),
      creamPuffsQuantity: Number(watch('creamPuffsQuantity')),
      speedyDelivery: watch('speedyDelivery'),
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
      <div className="flex gap-2 items-center justify-between">
        <label htmlFor="steamBunsQuantity">Steam buns</label>
        <input
          id="steamBunsQuantity"
          min={0}
          type="number"
          placeholder="0"
          className="input input-bordered w-1/2 max-w-sm"
          {...register('steamBunsQuantity', { onChange: handleChange })}
        />
      </div>
      <div className="flex gap-2 items-center justify-between">
        <label htmlFor="cookiesQuantity">Cookies</label>
        <input
          id="cookiesQuantity"
          type="number"
          min={0}
          placeholder="0"
          className="input input-bordered w-1/2 max-w-sm"
          {...register('cookiesQuantity', { onChange: handleChange })}
        />
      </div>
      <div className="flex gap-2 items-center justify-between">
        <label htmlFor="creamPuffsQuantity" className="w-full">
          Cream puffs
        </label>
        <input
          id="creamPuffsQuantity"
          type="number"
          placeholder="0"
          min={0}
          className="input input-bordered w-1/2 max-w-sm"
          {...register('creamPuffsQuantity', { onChange: handleChange })}
        />
      </div>

      <div className="flex gap-3 pb-5">
        <p>Speedy delivery?</p>
        <div className="flex gap-2">
          <input
            type="checkbox"
            className="toggle"
            {...register('speedyDelivery', { onChange: handleChange })}
          />
          <span>{watch('speedyDelivery') ? 'Yes' : 'No'}</span>
        </div>
      </div>
      <Button
        text={ButtonTexts.ORDER}
        isDisabled={
          watch('steamBunsQuantity') === 0 &&
          watch('cookiesQuantity') === 0 &&
          watch('creamPuffsQuantity') === 0
        }
      />
    </form>
  )
}
