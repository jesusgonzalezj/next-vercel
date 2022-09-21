import { FC, ReactNode } from "react"

const styles = {
  backgroundColor: '#515151',
  borderRadius: '5px',
  padding: '10px',
}

interface Props {
  children: ReactNode;
}

export const DarkLayout: FC<Props> = ({ children }) => {
  return (
    <div style={styles}>
      <h3>Dark-Layout</h3>
      <div>{children}</div>
    </div>
  )
}

