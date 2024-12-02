import { ReactNode } from "react"

interface Props {
    children: ReactNode,
    onClicked: () => void,
    class: string,
}

const Button = ({ children, onClicked, class: className }: Props) => {
    return (
        <button
            type="button"
            className={`py-2 px-4 rounded-2xl font-medium text-center ${className}`}
            onClick={onClicked}
        >
            {children}
        </button>
    )
}

export default Button