import { Skeleton } from "@/components/ui/skeleton"

const GitHubActivitySkeleton = () => {
    return (
        <div className="flex flex-col gap-2 mt-2">
            <Skeleton className='rounded-md h-4 w-42 bg-neutral-6/60 animate-pulse' />
            <Skeleton className="animate-pulse h-40 w-full bg-neutral-6/60 rounded-xl" />
            <Skeleton className="animate-pulse h-4 w-24 bg-neutral-6/60 rounded-md self-end" />
        </div>
    )
}

export default GitHubActivitySkeleton