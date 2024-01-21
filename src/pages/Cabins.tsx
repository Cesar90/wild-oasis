import CabinTable from "../features/cabins/CabinTable"
import Heading from "../ui/Heading"
import Row from "../ui/Row"

const Cabins = () => {

    return (
        <>
            <Row type="horizontal">
                <Heading as="h1">All Cabins</Heading>
                <p>Filter / Sort</p>
            </Row>

            <Row type="horizontal">
                <CabinTable />
            </Row>
        </>
    )
}

export default Cabins