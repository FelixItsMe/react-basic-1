import React from 'react'
import Label from './Label'
import Input from './Input'

const TextInput = () => {
  return (
    <div className="flex flex-col gap-1">
      <Label htmlFor="name">Nama</Label>
      <Input control={control} type="text" name="name" id="name" placeholder="Type user name" />
      <button>a</button>
    </div>
  )
}

export default TextInput