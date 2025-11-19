import type BaseObjectProps from '@/types/baseObject'
import type CategoryProps from '@/types/category'

export default interface ItemProps extends BaseObjectProps {
    categories: CategoryProps[] | null
    description: string
}
