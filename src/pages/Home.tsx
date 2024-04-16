import Top from '@shared/Top'
import AdBanners from '@components/home/AdBanners'
import CardList from '@components/home/CardList'
import { Suspense } from 'react'
import ListRow from '@/components/shared/ListRow'

function HomePage() {
  return (
    <div>
      <Top
        title="혜택 좋은 카드"
        subTitle="회원님을 위해서 혜택 좋은 카드를 모아봤어요"
      />
      <AdBanners />
      <Suspense
        fallback={[...new Array(10)].map((_, idx) => (
          <ListRow.Skeleton key={idx} />
        ))}
      >
        <CardList />
      </Suspense>
    </div>
  )
}

export default HomePage
