/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';
import { Heading } from '@theme-ui/components';

export default function Logo({ src, ...rest }) {
  return (
    <Link 
    path="/"
    sx={{
      variant:'links.logo' ,
      display:'flex' ,
      cursor:'pointer',
      mr: 15,
    }}
    {...rest}
    >
           <Heading as="h6" >Portfolio</Heading>
  
    </Link>
  );
}
