import './output.css'

export const metadata = {
  title: 'Portfolio',
  description: "Ahazel's portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
