import type { ReactNode } from "react"

type BoxProps = {
    children: ReactNode
}
function Box(props: BoxProps) {
    return (
        <div style={{ border: "2px solid green", padding: "8px", margin: "8px" }}>
            {props.children}
        </div>
    )
}

export default Box;