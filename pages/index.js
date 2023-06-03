import { 
        Container,
        FormControl,
        FormLabel,
        Heading,
        Input,
 } from "@chakra-ui/react";

const initValues ={ 
  name: "",
  email: "" ,
  subject: "",
  message: "",
}
ServiceWorkerRegistration.listen(3000, () =>{
  console.log("node.js server at port 3000");

})
 const initState ={values: initValues };

export default function Home() {
const [state , setState] =useState()

  return (
  <Container maxW= '450px' mt={12}>
  <Heading>Contact</Heading>;
<FormControl isRequired>

     <FormLabel>Name</FormLabel>

     <input
        type='text' name="name"          />

</FormControl>

  </Container>
  );
}
