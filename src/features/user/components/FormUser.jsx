import { useForm } from "react-hook-form"
import Label from "../../../components/Label"
import Input from "../../../components/Input"
import Button from "../../../components/Button"

export default function FormUser({mutation, defaultValues}) {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    defaultValues: defaultValues
  })

  const onSubmit = async (data) => {
    mutation.mutate(data)
    
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 md:p-5">
      <div className="flex flex-col gap-4 mb-4">
        <div className="flex flex-col gap-1">
          <Label htmlFor="name">Nama</Label>
          <Input control={control} type="text" name="name" id="name" placeholder="Type user name" />
        </div>
        <div className="flex flex-col gap-1">
          <Label htmlFor="email">Email</Label>
          <Input control={control} type="email" name="email" id="email" placeholder="Type user email" />
        </div>
        <div className="flex flex-col gap-1">
          <Label htmlFor="password">Password</Label>
          <Input control={control} type="password" name="password" id="password" placeholder="Type password" />
        </div>
        <div className="flex flex-col gap-1">
          <Label htmlFor="password_confirmation">Konfirmasi Password</Label>
          <Input control={control} type="password" name="password_confirmation" id="password-confirmation"
            placeholder="Type password confirmation" />
        </div>
      </div>
      <Button type="submit" disabled={isSubmitting} className="bg-black" >
        Add new User
      </Button>
    </form>
  )
}