export type Enrollment = {
    id: number;
    shift: string;
    start_date: string;
    end_date: string;
    status: string;
    institution_name: string;
    course_name: string;
    course_type: string;
};

export type Student = {
    id: number;
    academic_id: string;
    name: string;
    email: string;
    date_of_birth: string;
    contact_phone: string;
    enrollments: Enrollment[];
};
