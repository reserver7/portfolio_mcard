import './App.css'
import Text from '@shared/Text'
import Button from '@shared/Button'
import Input from '@shared/Input'
import TextField from '@shared/TextField'
import Alert from '@shared/Alert'
import { useAlertContext } from '@contexts/AlertContext'

function App() {
  const { open } = useAlertContext()

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

      <Input placeholder="로그인" aria-invalid={false} />
      <Input />

      <TextField label="아이디" />
      <TextField label="패스워드" hasError={true} />

      {/* <Alert open={true} title="알럿" onButtonClick={() => {}} /> */}

      <Button
        onClick={() => {
          open({
            title: '카드신청완료',
            description: '내역페이지에서 확인해주세요.',
            onButtonClick: () => {
              //
            },
          })
        }}
      >
        Alert 오픈
      </Button>
    </div>
  )
}

export default App
