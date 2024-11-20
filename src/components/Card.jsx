export default function Card({children}) {
  return (
    <div className="block bg-white border border-gray-200 rounded-lg overflow-hidden shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      {children}
    </div>
  )
}