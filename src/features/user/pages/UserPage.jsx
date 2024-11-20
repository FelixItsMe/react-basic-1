import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { getUsers, postUser } from "../api/ApiUser"
import Card from "../../../components/Card"
import { Link } from "react-router-dom"
import Modal from "../../../components/Modal"
import { useState } from "react"
import FormUser from "../components/FormUser"

export default function UserPage() {
  const [showModal, setShowModal] = useState(false)
  const queryClient = useQueryClient()
  const [defaultValues, setDefaultValues] = useState({})

  const mutation = useMutation({
    mutationFn: postUser,
    onSuccess: () => {
      setShowModal(false)
      queryClient.invalidateQueries({ queryKey: ['users'] })
    }
  })

  const { data: users, isLoading, isError, error } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers
  })

  if (isLoading) return <div>Loading</div>

  if (isError) return <div>{error.message}</div>

  return (
    <div>
      <Card>
        <div className="p-6 flex flex-row justify-between">
          <div>
            <h1>User</h1>
          </div>
          <div>
            <button type="button" className="px-4 py-2 bg-blue-500 text-white rounded-md font-bold hover:bg-blue-700"
              onClick={() => setShowModal(true)}>
              Create
            </button>
          </div>
        </div>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  #
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {users?.data?.map((user, keyIndex) => (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={keyIndex}>
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {(users.current_page - 1) * users.per_page + (keyIndex + 1)}
                  </th>
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {user.name}
                  </th>
                  <td className="px-6 py-4">
                    {user.email}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap space-x-2">
                      <a href="#" className="py-2 px-4 text-white bg-yellow-500 rounded">Edit</a>
                      <a href="#" className="py-2 px-4 text-white bg-red-500 rounded">Hapus</a>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <Modal id={'test-modal'} isShow={showModal} title="Create User" handleClose={() => setShowModal(false)}>
        <FormUser mutation={mutation} defaultValues={defaultValues} />
      </Modal>
    </div>
  )
}