import OnboardingForm from "@/components/onboard/OnboardingForm"
import { Label } from "@/components/ui/label"


export default function OnboardingPage() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-md">
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-bold">Welcome aboard!</h1>
                    <p className="text-gray-500 mt-2">Let's set up your shop</p>
                </div>
                <OnboardingForm />

            </div>
        </div>
    )
}
