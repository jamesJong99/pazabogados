"use client"
import { useRouter, useSearchParams } from "next/navigation";
import ContactSection from "@/components/homePageSections/ContactSection";
const Contacts = () => {
    const router = useRouter()
    const searchParams = useSearchParams();
    const id = searchParams.get('id');
    return (
        <>
            <ContactSection />
        </>
    );
}

export default Contacts;