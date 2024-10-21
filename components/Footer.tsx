

export function Footer() { 
    return (
              <footer className="bg-dheaders text-white py-10 mt-20" id="contact">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1">
            <h3 className="text-2xl font-bold mb-4">About Us</h3>
            <p className="text-gray-300">
              A team of students from Lowell High working to bring a hackathon to you!
            </p>
          </div>
          <div className="col-span-1">
            <h3 className="text-2xl font-bold mb-4">Contact</h3>
            <ul className="list-none text-gray-300">
              <li className="mb-2">
                <a href="mailto:millcityhacks@gmail.com" className="hover:underline">
                  millcityhacks@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/place/Lowell"
                  className="hover:underline"
                >
                  Lowell, MA
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="text-2xl font-bold mb-4">Social</h3>
            <ul className="list-none text-gray-300">
              <li className="mb-2">
                {/* <a */}
                  {/* href="https://www.facebook.com/millcityhacks"
                  className="hover:underline"
                >
                  Facebook
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://www.twitter.com/millcityhacks"
                  className="hover:underline"
                >
                  Twitter
                </a>
              </li>
              <li> */}
                <a
                  href="https://www.instagram.com/millcityhacks"
                  className="hover:underline"
                >
                  Instagram
                </a>
              </li>
            </ul>
            </div>

        </div>
        <div className="text-center mt-8">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} The Programming Initiative. All rights
            reserved.<br></br><br></br>WORK IN PROGRESS
          </p>
        </div>
      </div>
    </footer>
    )
}