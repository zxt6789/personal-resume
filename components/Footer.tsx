export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container text-center">
        <p> {new Date().getFullYear()} Xurui Liu. All rights reserved.</p>
        <p className="mt-2">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </div>
    </footer>
  )
}
