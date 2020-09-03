import React, { useState,Component } from 'react';
import { Button,Modal} from 'react-bootstrap';

// function SearchModel(props) {
//     const [smShow, setSmShow] = useState(false);
//     const [lgShow, setLgShow] = useState(false);
//     console.log(props);
//     return (
//       <>
//         {/* <Button onClick={() => setSmShow(true)}>Small modal</Button>{' '} */}
//         {/* <Button onClick={() => setLgShow(true)}>Large modal</Button> */}
//         <Modal
//           size="sm"
//           show={smShow}
//           onHide={() => setSmShow(false)}
//           aria-labelledby="example-modal-sizes-title-sm"
//         >
//           <Modal.Header closeButton>
//             <Modal.Title id="example-modal-sizes-title-sm">
//               Small Modal
//             </Modal.Title>
//           </Modal.Header>
//           <Modal.Body>...</Modal.Body>
//         </Modal>
//         <Modal
//           size="lg"
//           show={lgShow}
//           onHide={() => setLgShow(false)}
//           aria-labelledby="example-modal-sizes-title-lg"
//         >
//           <Modal.Header closeButton>
//             <Modal.Title id="example-modal-sizes-title-lg">
//               Large Modal
//             </Modal.Title>
//           </Modal.Header>
//           <Modal.Body>...</Modal.Body>
//         </Modal>
//       </>
//     );
// }

// export default SearchModel;

class SearchModel extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            smShow : true,
         };
    }

    modalShow(val){
        console.log(val)
        this.setState({
            smShow : val
        })
    }
    render() {
        const {smShow} = this.state
        return (
            <>
                <Modal
                    size="sm"
                    show={smShow}
                    onHide={() => this.modalShow(false)}
                    aria-labelledby="example-modal-sizes-title-sm"
                    >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-sm">
                        Small Modal
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>...</Modal.Body>
                </Modal>
            </>
        );
    }
}

export default SearchModel;