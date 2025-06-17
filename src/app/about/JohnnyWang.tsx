import Card, { Tag } from "./Card"
import johnnyWang from 'public/johnny_wang.jpg'

const JohnnyWangCard = () => (
  <Card
    name="Johnny"
    subtitle="President, Instructor"
    avatar={johnnyWang}
    tags={[Tag.CurrentInstructor, Tag.APCSA, Tag.Robotics]}
  >
    Johnny is a senior at Valley Christian High School that likes programming, robotics, and basketball. He has 4 years of  programming experience and 5 years of robotics experience. Johnny is currently the programming mentor for 2 middle school robotics teams and seeks to pass on his programming knowledge.
  </Card>
)

export default JohnnyWangCard
