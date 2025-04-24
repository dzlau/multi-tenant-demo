
import { SignIn } from '@clerk/nextjs'
export default function Signin() {
    return (
        <div className="flex w-full h-screen items-center justify-center bg-purple-600">
            <SignIn />
        </div>
    );
}