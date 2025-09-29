import React from 'react'
import TextBox from '@/core/layout/TextBox'
function Participating() {
  return (
    <div className='flex flex-col items-center'>
      <TextBox
          title = "Participating in Hacktoberfest"
          description ={
            <>
              <p>Here&apos;s what you need to know to participate and complete Hacktoberfest:</p>
              <li>Register anytime between <strong>September 23and October 31</strong></li>
              <li>Pull/merge requests can be made in any GitHub or GitLab hosted project that&apos;s participating in Hacktoberfest(look for the “hacktoberfest” topic).
              </li>
              <li>Aim to submit <strong>4 High-quality pull/merge</strong> requests between <strong>October 1 and October 31</strong>, with project maintainers accepting your pull/merge requests for them to count toward your total.</li>
              <li>You&apos;ll unlock a digital badge when you register for Hacktoberfest, and level it up with each of your four pull/merge requests accepted during Hacktoberfest</li>
            </>
          }
      />
    </div>
  )
}

export default Participating
