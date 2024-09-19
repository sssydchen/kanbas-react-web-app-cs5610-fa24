export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name"><strong>Assignment Name</strong></label><br /> <br />
      <input id="wd-name" value="A1 - ENV + HTML" /> <br /><br />

      <textarea id="wd-description" style={{ width: "100%", height: "150px", marginBottom: "20px" }}>
        The assignment is available online. Submit a link to the landing page of your Web application running on Netlify.
        The landing page should include the following: Your full name and section, links to each of the lab assignments,
        links to the Kanbas application, links to all relevant source code repositories. The Kanbas application should include a link
        to navigate back to the landing page.
      </textarea>

      <table style={{ width: "100%" }}>
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" type="number" value={100} />
            </td>
          </tr>
          <br />
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group">
                <option value="assignments">ASSIGNMENTS</option>
              </select>
            </td>
          </tr>
          <br />
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
              <select id="wd-display-grade-as">
                <option value="percentage">Percentage</option>
              </select>
            </td>
          </tr>
          <br />

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type">
                <option value="online">Online</option>
              </select>
            </td>
          </tr>
          <br />

          <tr>
            <td align="right" valign="top"><br />
            </td>
            <td>
              <label>Online Entry Options</label><br />
              <input type="checkbox" name="check-entry" id="wd-text-entry" />
              <label htmlFor="wd-text-entry">Text Entry</label><br />

              <input type="checkbox" name="check-entry" id="wd-website-url" />
              <label htmlFor="wd-website-url">Website URL</label><br />

              <input type="checkbox" name="check-entry" id="wd-media-recordings" />
              <label htmlFor="wd-media-recordings">Media Recordings</label><br />

              <input type="checkbox" name="check-entry" id="wd-student-annotation" />
              <label htmlFor="wd-student-annotation">Student Annotation</label><br />

              <input type="checkbox" name="check-entry" id="wd-file-upload" />
              <label htmlFor="wd-file-upload">File Uploads</label><br />
            </td>
          </tr>
          <br />

          <tr>
            <td align="right" valign="top"><br />
            </td>
            <td >
              <label htmlFor="wd-assign-to">Assign to</label><br />
              <input id="wd-assign-to" value="Everyone" />
            </td>
          </tr>
          <br />

          <tr>
            <td align="right" valign="top"><br />
            </td>
            <td >
              <label htmlFor="wd-due-date">Due</label><br />
              <input id="wd-due-date" type="date" value="2024-05-13" />
            </td>
          </tr>
          <br />

          <tr>
            <td align="right" valign="top"><br />
            </td>
            <td>
              <label htmlFor="wd-available-from">Available from</label> <label style={{ marginLeft: "25px" }} htmlFor="wd-available-until">Until</label><br />
              <input id="wd-available-from" type="date" value="2024-05-06" />
              <input id="wd-available-until" type="date" value="2024-05-20" />
            </td>
          </tr>
          <br />
        </tbody>
      </table>

      <hr />
      <div style={{ textAlign: "right" }}>
        <button style={{ marginRight: "10px" }}>Cancel</button>
        <button>Save</button>
      </div>
    </div>

  );
}