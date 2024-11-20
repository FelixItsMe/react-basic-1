import React from 'react'
import Label from './Label'
import Input from './Input'

const TextInput = () => {
  return (
    <div className="flex flex-col gap-1">
      <Label htmlFor="name">Nama</Label>
      <Input control={control} type="text" name="name" id="name" placeholder="Type user name" />
      <a href="#">a</a>
    </div>
  )
}

export default TextInput