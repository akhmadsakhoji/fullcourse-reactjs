import { Form, Button, Stack, Card, } from 'react-bootstrap';
import {BsFillPlusCircleFill} from "react-icons/bs";
const Add = ({handleChangeTodoName, todoName, addTodo}) => {
    return (
        <Card className='mt-5'>
            <Card.Body>
                <Stack direction='horizontal' gap={3}>
                    <Form.Control type='text' placeholder='Masukan Todo ...' onChange={handleChangeTodoName} value={todoName} />
                    <Button onClick={addTodo}><BsFillPlusCircleFill /></Button>
                </Stack>
            </Card.Body>
        </Card>
    )
};

export default Add;