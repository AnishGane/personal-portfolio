import { Skeleton } from "@/components/ui/skeleton"

const GitHubActivitySkeleton = () => {
    return (
        <div className="flex flex-col gap-2 mt-2">
            <Skeleton className='rounded-md h-6 w-42 bg-neutral-6/30 animate-pulse' />
            <Skeleton className="animate-pulse h-44 w-full bg-neutral-6/30 rounded-xl" />
            <Skeleton className="animate-pulse h-6 w-32 bg-neutral-6/30 rounded-md self-end" />
        </div>
    )
}

export default GitHubActivitySkeleton