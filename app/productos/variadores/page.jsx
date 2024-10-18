import React from 'react'
import Link from "next/link"
const Variadores = () => {

  const catalogos = [
    {
      nombre: "Linea HV100 HNC",
      url: "https://img1.wsimg.com/blobby/go/1f21d107-1a52-4cb3-997a-805619e0e527/downloads/Variador_HV100_HNC.pdf?ver=1676306643389",
      thumbnail: "data:image/jpeg;base64,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"
    },
    {
      nombre: "Linea HV480 HNC",
      url: "https://img1.wsimg.com/blobby/go/1f21d107-1a52-4cb3-997a-805619e0e527/downloads/Variador_HV480_HNC.pdf?ver=1676306643389",
      thumbnail: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFwAXAMBIgACEQEDEQH/xAAcAAEAAwADAQEAAAAAAAAAAAAABAcIAwUGAgH/xABJEAACAQMBBQEICw0JAAAAAAABAgMABBEFBgcSITETFCI2QVGRsrMyYXF0gZOUsdHS0xUWN0RGVFZkcnWCkqEXJCYzUmJjc/H/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQIDBAX/xAAgEQEBAQACAgEFAAAAAAAAAAAAAQIDERIhMQQFEzJx/9oADAMBAAIRAxEAPwC8aUpQR7+9ttOtJLu9lWKCMZd26Dniui+//ZINwttBYI3keXhI89fm8o42G1Y/8S+mtZhkCz6zHHIOJHkRWGSMjl5KDUH3/bI/pHpnyhaff7sj+kemfKVrKy3EbKD3Fbcxn2U32lfvbxfmVt/PN9pQaqG3eyR/KTSvlSfTQ7d7JD8pNL+VJ9NZV7aLp3HB/PL9epUMMNxbqRCkTF3HErufYqpHIk/6jQar0vafQ9Xue5tL1S1u5uEvwwvxd6Op5e6K7eqE3GNnahB+pS+mtX3QKUpQKUpQeW3n+Amrf9a+mtZduJu59USYrxdm6vw5xnGDjNag3pHGwWrH/YnrFrNllpi6nfXbzM/YW0QkdYyoZ8kAKC3IeUk9AD1OAQgkaerqoM4Qrni7Ycvg7OvtxpyKCHuGJxyEg6eX/Lruk2SFzLC0K3FsnEwuIJXSWRMKzAoy8KvxcDAZxg9eXOoWo6JEmlT31rFc27W7DtIbiaOXiQsFDBkAwQxAwR4+RODQQJvuenCUM8meoEwGB5ecdfU11DbxxLZniwWfikPEe+CjyLjHD/WueWys3mHc4kjhxzL8y3LqFzyHXqx6+KuG6gsotPm4QxuAylZASRjmCMZ73qOffex6jPMLK3FjG1SHP4lKMfxLV/Vn3cUf8XRj9Sm9Ja0FQKUpQKUpQeT3rfg/1f8AYj9YtZt0xbn7pXEkMlvHbRwk3bXSccXZZXky4JbLcOAOecEYxkaR3sfg/wBW/Zj9alZu02/uLHUJ1himljnj4JRBKY5FAIIZH8TA+0RzIxzp31Etk912N0moyT2Umk3GnpYI8mOwhMUUTcGZDKjjJBQHrxZUEDxiuHW+1NkVtDZJZxyxvdQ2to9u2Tngdw4yy8zjngE9BkVzz6jqSJBDbadeSWK8fare3HaPOGQoQWGOEBScADkTnnUa4a91SwkSws3hilZIJJ7+9iBbg9jDHkIuAcEgAnOOnQyal+Kmd51+t7QVbPWpF89o9uTFbJEQh4m4nJPu5JHmFQYLXU1kkhaycyQtwSK3esreQ5pfWuqGJhLbGONRxNhgeQ+Gnnmeu3on03NrPlMXr+VYm4jwvj95TektaFrPe4nwui95TektaEquJSlKBSlKDye9SNpNgNXVcckRjnyCRSf6Cs127dy3jTyI5jKEZUZ58vorTe8ocWwmte1bE+Yis1DPix56mszU6rG8zebmpl7tbE1u6LYxhyBgiHgPnzUfTdXspLONLq9ayuIYpIsmDtUZWcvxLjo2WIIPIgLzGK4ioPslQ+7/AOVMh0S+uFR4tMlZHGVcRsAfbzjGKzjizx/DHFwY4u/FHttpoodXadLd3tAsSRhzmQiNFQM2PGQoJHl8dS9X2hj1aExR20yt2bKO98o92os1m1tKY5rYRuPE64+cUCkdAvwGpeHGr2+rxfcvqOLi/Hm+ntdxyFNsY1YYYWU3L+JK0DVDbkkJ24ckDvdNm9ZFV810eApSlApSlB5veR4Ca570es0Ka0tvK8Atd95vWZwasRzRMUmjdQpKMGAcZBwc8x4xXuE2y0e4Y3GoaTfrcmYTMLa94Yiwz0BGVHPpz8VeFHTNdzFG0F0CbAQ/3YNwSMTxZ5cXTln5/Mc66tkrpjesd3N6Nf1ldVS0ggtBa2tmHESmTtHbiOSXbAyfg89dWDyr7ljkXvniZFbmuVwCPa9quLODz6eKtdMW23urB3JeG037sl9ZDV61RO5Hw1n/AHbL6yKr2qUhSlKBSlKDptsNMn1rZjUtMtGjWe5gMcZlJCgnykA/NVOrub2nH4zpPx8n2dX3SgocbntpvznSvj5Ps6+hug2nznurS8++JPqVe1KCi/7IdpcYNxpfx8n1K+Tuf2lP4xpfx8n1KvalXsVju32A1nZfaOTUdRmsmgazeACCRmbiLxsORUcu8NWdSlQKUpQf/9k="
    },
    // Añade más catálogos aquí
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Catálogos de Variadores</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {catalogos.map((catalogo, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
            <img src={catalogo.thumbnail} alt={`Thumbnail de ${catalogo.nombre}`} className="w-32 h-32 object-cover mb-4 rounded-md" />
            <h2 className="text-lg font-semibold mb-2 text-center">{catalogo.nombre}</h2>
            <Link href={catalogo.url} target="_blank" rel="noopener noreferrer">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                Ver Mas
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Variadores