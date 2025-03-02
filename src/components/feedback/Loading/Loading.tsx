import { TLoading } from "@customTypes/shared.types"

interface ILoadingStatus {
    status: TLoading;
    error: null | string;
    children: React.ReactNode;
}
const Loading: React.FC<ILoadingStatus> = ({ status, error, children }) => {

    if(status === 'pending') {
        return <p>Loading please wait...</p>
    }

    if(status === 'failed') {
        return <p>{error}</p>
    }

  return<> {children}</>;
}

export default Loading