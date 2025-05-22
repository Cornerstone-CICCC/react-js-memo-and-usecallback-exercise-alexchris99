import { memo } from "react" // emoized the component and unless the prop values change, React will not re-render the component.

type Props = {
    firstname: string,
    lastname: string
}

const Profile = memo(({firstname, lastname}: Props) => {
    console.log("Rendered Profile Component")
    return (
        <div>
            <h1>Profile</h1>
            <h2>First Name: {firstname}</h2>
            <h2>Last Name: {lastname}</h2>
        </div>
    )
})

export default Profile