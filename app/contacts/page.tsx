"use client"
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import ContactSection from "@/components/homePageSections/ContactSection";
const ContactsComponent = () => {
    const router = useRouter()
    const searchParams = useSearchParams();
    const id = searchParams.get('id');
    return (
        <>
            <ContactSection />
        </>
    );
}

export default function Contacts () {
    return(
        <Suspense>
            <ContactsComponent />
        </Suspense>
    )
};