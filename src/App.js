// import { Button, Col, Form, Input, Row, Select, Typography } from 'antd';
// import './App.scss';
// import { EnvironmentOutlined } from '@ant-design/icons';
// import allData from 'data/SelectData.json'
// import { useState } from 'react';


// const initialState = { interest: '', name: '', email: '', number: '', whatsappNumber: '' };
// const { Title } = Typography;
// function App() {
//   const [state, setState] = useState(initialState);
//   const [isProcessing, setIsProcessing] = useState(false);

//   const handleChange = (fieldName, value) => {
//     setState({ ...state, [fieldName]: value });
//     const selectedOption = allData.find((option) => option.value === value);
//     if (selectedOption) {
//       console.log(selectedOption.label);
//     }
//   };


//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(state)
//   }
//   return (
//     <div className='min-h-screen w-full flex justify-center items-center formBg'>
//       <Row className='w-full'>
//         <Col span={24} className='mx-auto flex justify-center items-center'>
//           <Form className='bg-gray-100 p-4 rounded-md hover:bg-gray-200 w-3/4'>
//             <Row>
//               <Col span={24}>
//                 <Title level={3} className='italic text-center'>Registration</Title>
//               </Col>
//             </Row>
//             <Row gutter={16}>
//               <Col xs={24} md={12}>
//                 <Form.Item label='Please select your interest of area in Khidmat (Below options)' rules={[{ required: true, message: 'Please select Your Interset area!' }]} labelCol={{ span: 24 }} wrapperCol={{ span: 24 }}>
//                   <Select size='large' onChange={(value) => handleChange('interest', value)} placeholder="Select Your Interset">
//                     {allData.map(place => (
//                       <Select.Option key={place.id} value={place.id.toString()}>
//                         {place.label}
//                       </Select.Option>
//                     ))}
//                   </Select>
//                 </Form.Item>
//               </Col>
//               <Col xs={24} md={12}>
//                 <Form.Item label='Name :-' rules={[{ required: true, message: 'Please enter your name!' }]} labelCol={{ span: 24 }} wrapperCol={{ span: 24 }} >
//                   <Input size='large' name='name' prefix={<EnvironmentOutlined className="site-form-item-icon" />} type='text' placeholder="Enter Your Name" onChange={(e) => handleChange('name', e.target.value)} />
//                 </Form.Item>
//               </Col>
//             </Row>
//             <Row gutter={16}>
//               <Col xs={24} md={12}>
//                 <Form.Item label='Email :-' rules={[{ required: true, message: 'Please enter your email!' }]} labelCol={{ span: 24 }} wrapperCol={{ span: 24 }} >
//                   <Input size='large' name='email' prefix={<EnvironmentOutlined className="site-form-item-icon" />} type='email' placeholder="Enter Your Email" onChange={(e) => handleChange('email', e.target.value)} />
//                 </Form.Item>
//               </Col>

//               <Col xs={24} md={12}>
//                 <Form.Item label='Phone Number :-' rules={[{ required: true, message: 'Please enter your phone number!' }]} labelCol={{ span: 24 }} wrapperCol={{ span: 24 }} >
//                   <Input size='large' name='number' prefix={<EnvironmentOutlined className="site-form-item-icon" />} type='number' placeholder="Enter Your Phone Number" onChange={(e) => handleChange('number', e.target.value)} />
//                 </Form.Item>
//               </Col>
//             </Row>


//             <Row>
//               <Col xs={24}>
//                 <Form.Item label='Whatsapp Number :-' rules={[{ required: true, message: 'Please enter your whatsapp number!' }]} labelCol={{ span: 24 }} wrapperCol={{ span: 24 }} >
//                   <Input size='large' name='whatsappNumber' prefix={<EnvironmentOutlined className="site-form-item-icon" />} type='number' placeholder="Enter Your Whatsapp Number (92)" onChange={(e) => handleChange('whatsappNumber', e.target.value)} />
//                 </Form.Item>
//               </Col>
//             </Row>
//             <div className='text-center'>
//               <Button loading={isProcessing} type='primary' className='w-1/2' style={{ backgroundColor: "#1677ff", }} disabled={isProcessing} onClick={handleSubmit}>
//                 Add
//               </Button>
//             </div>
//           </Form>
//         </Col>
//       </Row>
//     </div>
//   );
// }

// export default App;


import { Button, Col, Form, Input, Row, Select, Typography } from 'antd';
import './App.scss';
import { EnvironmentOutlined, MailOutlined, UserOutlined, PhoneOutlined, WhatsAppOutlined } from '@ant-design/icons';
import allData from 'data/SelectData.json';
import { useState } from 'react';

const initialState = { name: '', email: '', number: '', whatsappNumber: '', interested: '' };
const { Title } = Typography;

function App() {
  const [state, setState] = useState(initialState);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleChange = (fieldName, value) => {
    setState({ ...state, [fieldName]: value });
    const selectedOption = allData.find((option) => option.value === value);
    if (selectedOption) {
      console.log(selectedOption.label);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let { interested, name, email, number, whatsappNumber } = state;

    if (!interested) { return window.toastify("Please Select Your Interset", "error") }
    if (!name) { return window.toastify("Please Enter Your Name", "error") }
    if (!email) { return window.toastify("Please Enter Your Email", "error") }
    if (!number) { return window.toastify("Please Enter Your Phone Number", "error") }
    if (!whatsappNumber) { return window.toastify("Please Enter Your Whatsapp Number", "error") }

    let formData = { interested, name, email, number, whatsappNumber }
    console.log(formData)
    if (formData) { return window.toastify("Your Data Successfully Added", "success") }
    setState(initialState)
  };

  return (
    <div className='min-h-screen w-full flex justify-center items-center formBg'>
      <Row className='w-full'>
        <Col span={24} className='mx-auto flex justify-center items-center'>
          <Form className='bg-gray-100 p-4 rounded-md hover:bg-gray-200 w-4/5 md:w-3/4 py-5 my-12 md:my-5'>
            <Row>
              <Col span={24}>
                <Title level={3} className='italic text-center'>Registration</Title>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col xs={24} md={12}>
                <Form.Item
                  label='Please select your area of interest in Khidmat (Below options)'
                  rules={[{ required: true, message: 'Please select Your Interest area!' }]}
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}
                >
                  <Select
                    size='large'
                    onChange={(value) => handleChange('interested', value)}
                    placeholder="Select Your Interest"

                  >
                    {allData.map((place) => (
                      <Select.Option key={place.id} value={place.value}>
                        {place.label}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item
                  label='Name :-'
                  rules={[{ required: true, message: 'Please enter your name!' }]}
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}
                >
                  <Input
                    size='large'
                    name='name'
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    type='text'
                    placeholder="Enter Your Name"
                    value={state.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col xs={24} md={12}>
                <Form.Item label='Email :-' rules={[{ required: true, message: 'Please enter your email!' }]} labelCol={{ span: 24 }} wrapperCol={{ span: 24 }} >
                  <Input size='large' value={state.email} name='email' prefix={<MailOutlined className="site-form-item-icon" />} type='email' placeholder="Enter Your Email" onChange={(e) => handleChange('email', e.target.value)} />
                </Form.Item>
              </Col>

              <Col xs={24} md={12}>
                <Form.Item label='Phone Number :-' rules={[{ required: true, message: 'Please enter your phone number!' }]} labelCol={{ span: 24 }} wrapperCol={{ span: 24 }} >
                  <Input size='large' value={state.number} name='number' prefix={<PhoneOutlined className="site-form-item-icon" />} type='number' placeholder="Enter Your Phone Number" onChange={(e) => handleChange('number', e.target.value)} />                 </Form.Item>
              </Col>
            </Row>


            <Row>
              <Col xs={24}>
                <Form.Item label='Whatsapp Number :-' rules={[{ required: true, message: 'Please enter your whatsapp number!' }]} labelCol={{ span: 24 }} wrapperCol={{ span: 24 }} >
                  <Input size='large' value={state.whatsappNumber} name='whatsappNumber' prefix={<WhatsAppOutlined className="site-form-item-icon" />} type='number' placeholder="Enter Your Whatsapp Number (92)" onChange={(e) => handleChange('whatsappNumber', e.target.value)} />
                </Form.Item>
              </Col>
            </Row>
            <div className='text-center'>
              <Button
                loading={isProcessing}
                type='primary'
                className='w-1/2'
                style={{ backgroundColor: "#1677ff" }}
                disabled={isProcessing}
                onClick={handleSubmit}
              >
                Add
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default App;
