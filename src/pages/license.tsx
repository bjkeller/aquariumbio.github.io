import React from "react";
import Typography from '@material-ui/core/Typography';
import FooterPage from '../components/footerpage';

export default function License() {
  return (
    <FooterPage
      currentPage="license"
      pageLeft="contributors"
      pageRight="releases"
    >
      <Typography variant="body1" paragraph>
        Copyright (c) 2013-2020 University of Washington
      </Typography>

      <Typography variant="body1" paragraph>
        Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
      </Typography>

      <Typography variant="body1" paragraph>
        The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
      </Typography>

      <Typography variant="body1" paragraph>
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
      </Typography>
    </FooterPage>
  )
}
