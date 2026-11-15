'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export default function SearchPage() {
    const pathname = usePathname();
    const router = useRouter();
    const seachParams = useSearchParams();

    return (
        <div>
            Pathname: {pathname}
            <button className="border p-4 rounded" onClick={() => router.push('/')}>
                Home Page
            </button>

            Pathname: {pathname}
            <button className="border p-4 rounded" onClick={() => router.forward()}>
                Next page
            </button>

            Pathname: {pathname}
            <button className="border p-4 rounded" onClick={() => router.back()}>
                Back to previous page
            </button>

            {/* searchParams */}
            Search Params : {seachParams.get('category')}
        </div>
    )
}
