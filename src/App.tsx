import './App.css'
import Text from '@shared/Text'
import Button from '@shared/Button'

function App() {
  return (
    <div>
      <Text typography="t1" display="block" color="red">
        1
      </Text>
      <Text typography="t2" color="blue">
        2
      </Text>
      <Text typography="t3">3</Text>
      <Text typography="t4">4</Text>
      <Text>5</Text>

      <div style={{ height: 10, width: '100%', backgroundColor: '#efefef' }}>
        <Button>클릭해주세요</Button>
        <Button color="success">클릭해주세요</Button>
        <Button color="error">클릭해주세요</Button>
        <Button color="success" weak={true}>
          클릭해주세요
        </Button>
        <Button color="error" weak={true}>
          클릭해주세요
        </Button>
        <Button full={true}>클릭해주세요</Button>
      </div>
    </div>
  )
}

export default App
