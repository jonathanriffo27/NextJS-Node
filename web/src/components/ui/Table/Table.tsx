import { 
    faPencil, faTrashCan
  } from '@fortawesome/free-solid-svg-icons';

import Icon from '../Icon'
import Col from "../../layout/Col"
import Row from "../../layout/Row"


const Table = ({className}:any) => {
  return (
    <div className={`h-full py-[10px] w-[684px] m-auto`}>
        <div className="flex flex-col gap-[2px] h-full rounded-[5px] border border-[#CCCCCC] p-[3px]">
            <TableHeader />
            <TableDetails />
        </div>
    </div>
  )
}

const TableHeader = () => {
    return (
        <Row height='h-[36px]' display='flex gap-[2px] font-bold'>
            <Col gap='g-[2px]' className='bg-[#EDEDED] h-[36px] w-[81px]'>#
            </Col> 
            <Col className='bg-[#EDEDED] flex-grow'>Nombre
            </Col>
        </Row>
    )
}

const TableDetails = () => {
    return (
        <div className='flex flex-col gap-[2px]'>
            <Row height='h-[36px]' display='flex gap-[2px]'>
                <Col gap='gap-[2px]' className='bg-[#EEF2FF] h-[36px] w-[81px]'>1
                </Col> 
                <Col className='bg-[#EEF2FF] flex-grow px-[15px]' justify='justify-between'>
                    <span>Juan Fernandez</span> 
                    <div className='flex gap-[6px] cursor-pointer'>
                        <Icon icon={faPencil} color='#959595' fontSize='20px' />
                        <Icon icon={faTrashCan} color='#959595' fontSize='20px' />
                    </div>
                </Col>
            </Row>
            <Row height='h-[36px]' display='flex gap-[2px]'>
                <Col gap='gap-[2px]' className='bg-[#F8F8F8] h-[36px] w-[81px]'>1
                </Col> 
                <Col className='bg-[#F8F8F8] flex-grow px-[15px]' justify='justify-between'>
                    <span>Juan Fernandez</span> 
                    <div className='flex gap-[6px] cursor-pointer'>
                        <Icon icon={faPencil} color='#959595' fontSize='20px' />
                        <Icon icon={faTrashCan} color='#959595' fontSize='20px' />
                    </div>
                </Col>
            </Row>
    </div>
    )
}

export default Table;
export {TableHeader, TableDetails};