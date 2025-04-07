'use client';
import { Slash } from 'lucide-react';

import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { usePathname } from 'next/navigation';

export function BreadCrumbsCustom() {
	const path = usePathname();
	const crumbs = path.split('/');
	return (
		<Breadcrumb className="">
			<BreadcrumbList
				className={`${
					path.startsWith('/contracts/')
						? 'text-black '
						: 'text-white'
				}`}
			>
				{crumbs.map((c: string, index: number) => (
					<BreadcrumbItem
						className=""
						key={index}
					>
						<BreadcrumbLink
							className="hover:text-primary"
							href={`/${c}`}
						>
							{c}
						</BreadcrumbLink>

						{index != crumbs.length - 1 && (
							<span>/</span>
						)}
					</BreadcrumbItem>
				))}
			</BreadcrumbList>
		</Breadcrumb>
	);
}
