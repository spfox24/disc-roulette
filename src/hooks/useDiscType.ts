import discType from '../data/discType'

export interface Disc {
    id: number;
    name: string;
}

const useDiscType = () => ({data: discType, isLoading: false, error: null});

export default useDiscType;