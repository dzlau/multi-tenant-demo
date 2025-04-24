import OnboardingForm from "@/components/builder/OnboardingForm"
import { Label } from "@/components/ui/label"

/*************  ✨ Windsurf Command ⭐  *************/
/**
 * The onboarding page. This page is displayed when a user is onboarding a new shop.
 * The page asks for the shop's name and URL, and displays any errors that occur
 * while submitting the form.
 */
/*******  34185cbb-e3d7-46a1-a7be-528ec32f80e6  *******/export default function OnboardingPage() {
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
