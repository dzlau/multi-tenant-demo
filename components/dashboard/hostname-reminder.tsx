'use client'
import { checkDomainSettingsValid } from "@/app/dashboard/actions";
import { AlertDescription, Alert, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Store } from "@/types/store";
import { CheckCircleIcon } from "lucide-react";
import { useState } from "react";

export function HostnameReminder({ store }: { store: Store }) {
    const [isDomainVerified, setIsDomainVerified] = useState(store.is_verified)
    const [isCheckingDomain, setIsCheckingDomain] = useState(false)
    const [showDomainNotVerifiedAlert, setShowDomainNotVerifiedAlert] = useState(false)
    const [isDomainSuccessfullyVerified, setIsDomainSuccessfullyVerified] = useState(false)

    const checkDomain = () => {
        setIsCheckingDomain(true)
        setShowDomainNotVerifiedAlert(false)
        if (!store.hostname) {
            setIsCheckingDomain(false)
            return
        }
        checkDomainSettingsValid(store.hostname).then((result) => {
            if (result) {
                setIsDomainSuccessfullyVerified(true)
            } else {
                setShowDomainNotVerifiedAlert(true)
            }
            setIsCheckingDomain(false)
        })


    }
    return (
        <>
            {!isDomainVerified && (<Alert variant="brand">
                <AlertTitle>
                    {isDomainSuccessfullyVerified ? "Domain Verified!" : "Cname not setup!"}
                </AlertTitle>
                <AlertDescription>
                    <div className="text-white">
                        {isDomainSuccessfullyVerified ? <div>Your shop is ready to go!</div> : <div>In order to finish the domain process, point the cname of <b>{store.hostname}</b> to <b>cname.vercel-dns.com</b> or A record to <b>76.76.21.21</b></div>}
                    </div>
                    <div className="my-2 flex-col w-full  justify-end">
                        <div className=" flex justify-end">
                            {isDomainSuccessfullyVerified ?
                                (<Button variant='success' className="bg-none text-white"> <CheckCircleIcon className="w-4 h-4" /> Domain Verified</Button>) :
                                (<Button variant='outline' className="bg-none text-white" onClick={() => checkDomain()} >{isCheckingDomain ? "Checking..." : "Verify Again"}</Button>)}
                        </div>
                        {showDomainNotVerifiedAlert && (<Alert variant="danger" className="mt-4">
                            <AlertTitle>Domain Could not be verified!</AlertTitle>
                            <AlertDescription>
                                <div className="text-white">
                                    The domain is not verified. Please try again.
                                </div>
                            </AlertDescription>
                        </Alert>)}
                    </div>
                </AlertDescription>
            </Alert >)
            }
        </>
    );
}