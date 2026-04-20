import { Skeleton } from "@/components/ui/skeleton"

const PortfolioProjectSkeleton = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            {Array.from({ length: 4 }).map((_, index) => (
                <Skeleton className="animate-pulse h-92 w-full bg-neutral-6/40 rounded-xl" key={index} />
            ))}
        </div>
    )
}

export default PortfolioProjectSkeleton