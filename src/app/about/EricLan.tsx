import Card, { Tag } from "./Card"
import ericLan from 'public/eric_lan.jpg'

const EricLanCard = () => (
  <Card
    name="Eric"
    subtitle="Co-President, Instructor"
    avatar={ericLan}
    tags={[Tag.CurrentInstructor, Tag.APCSA]}
  >
    Eric is a junior at Irvington High School. He is interested in scripting, modeling, and graphic design.
    In his free time, Eric enjoys hiking, gaming, photography, and pondering life&apos;s big questions.
    Eric finds solace and inspiration in the great outdoors. Hiking through nature&apos;s scenic trails allows
    him to escape the hustle and bustle of everyday life, connecting him with the serenity and beauty of the natural world.
  </Card>
)

export default EricLanCard
