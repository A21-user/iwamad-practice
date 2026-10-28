type FooterProps = {
  year: number
  name: string
  week: string
}

function Footer({ year, name, week }: FooterProps) {
  return (
    <footer>
      <p>
        {year} {name} — {week}
      </p>
    </footer>
  )
}

export default Footer