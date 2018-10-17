# How to use styled components

First step is to import styled template literal like:

```javascript
import styled from 'styled-components'
```

After you can create your first component. Always try to add some meaning to
each styled component. Don't create unessary wrappers etc.
So let's create for example Link component:

```javascript

const Link = styled.a`
  // Inside this block you can write your styles.
  // Here define only presentative styles, styles that define
  // how component should look like.

  // Don't add here styles related to positioning. That is responsibility
  // of container of this element.

  // Some styles just for example:
  display: flex;
  color: black;
  // etc...
`
```

So obviously ad some moment you would need to add some positioning rules.
That is responsibility of container component. Let's define some abstract Card component,
which consists of Title and Link.

```javascript
const Title = styled.h1`
  color: red;
  font-size: 24px;
`

// And here you would want to position elements with some margins etc.
// Add those rules here.

// This element is only a wrapper of our component
// That naming is a convention.
const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;

  ${Title} {
    // Define positioning here
    margin-top: 10px;
  }

  ${Link} {
    // Define positioning here
    margin-top: 15px;
  }
`

const Card = () => (
  <StyledCard>
    <Title>Awersome card</Title>
    <Link href="#">Go to awersome card details</Link>
  </StyledCard>
)
```

That approach helps to keep components clean and with clear responsibilities.
Now it is easy to reuse individual components. Otherwise if you have defined positioning
rules in individual components, and you decided to use it in different place, you will need 
to override styles and that will be a mess.
