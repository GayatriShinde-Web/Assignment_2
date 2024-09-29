function calculateFees() {
    // Get the values from the input fields
    const name = document.getElementById('name').value;
    const studentType = document.getElementById('studentType').value;
    const residency = document.getElementById('residency').value;
    const credits = parseInt(document.getElementById('credits').value);

    // Define the fee structure
    const feeStructure = {
        bachelor: {
            "in-state": { registrationFee: 200, tuitionRate: 350 },
            "out-state": { registrationFee: 600, tuitionRate: 700 }
        },
        master: {
            "in-state": { registrationFee: 300, tuitionRate: 450 },
            "out-state": { registrationFee: 900, tuitionRate: 900 }
        }
    };

    // Calculate fees based on the input
    const registrationFee = feeStructure[studentType][residency].registrationFee;
    const tuitionRate = feeStructure[studentType][residency].tuitionRate;
    const tuition = tuitionRate * credits;
    const totalFee = registrationFee + tuition;

    // Convert student type to readable format
    const studentTypeDisplay = studentType.charAt(0).toUpperCase() + studentType.slice(1);
    const residencyDisplay = residency.charAt(0).toUpperCase() + residency.slice(1);

    // Prepare the output message
    const outputMessage = `
        <h3>Hi ${name},</h3>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>Student Type:</strong></td>
                    <td>${studentTypeDisplay}</td>
                </tr>
                <tr>
                    <td><strong>Residency:</strong></td>
                    <td>${residencyDisplay}</td>
                </tr>
                <tr>
                    <td><strong>Credits Taking:</strong></td>
                    <td>${credits}</td>
                </tr>
                <tr>
                    <td><strong>Registration Fee:</strong></td>
                    <td>$${registrationFee}</td>
                </tr>
                <tr>
                    <td><strong>Tuition Rate (per credit):</strong></td>
                    <td>$${tuitionRate}</td>
                </tr>
                <tr>
                    <td><strong>Tuition (Total):</strong></td>
                    <td>$${tuition}</td>
                </tr>
                <tr>
                    <td><strong>Total Fee:</strong></td>
                    <td>$${totalFee}</td>
                </tr>
            </tbody>
        </table>
    `;

    // Clear the form fields
    document.getElementById('name').value = '';
    document.getElementById('studentType').value = 'bachelor';
    document.getElementById('residency').value = 'in-state';
    document.getElementById('credits').value = '';

    // Clear the form from the view and only show the fees section
    document.querySelector('.container').innerHTML = outputMessage;
}
